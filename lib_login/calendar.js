const express = require('express');
const router = express.Router();
const db = require('./db');
const style = require('./calendar/style.js');

router.get('/allcalendar', function (request, response) {
    const title = 'Event Calendar';
    const username = request.session.nickname;

    db.query('SELECT * FROM caltable WHERE username = ?', [username], function(error, results) {
        if (error) {
            console.error(error);
            response.status(500).send('Internal Server Error');
        } else {
            const list = ''; // You might need to create a list based on results
            const html = style.HTML(title, list, `
                <div id="calendar"></div>
                <div id="event-form">
                    <button id="openEventFormBtn">+</button>
                    <form id="addEventForm">
                        <label for="eventTitle" style="margin-top: 20px;">Title</label>
                        <input type="text" id="eventTitle" name="title" required>
                        
                        <label for="eventDate">Date</label>
                        <input type="text" id="eventDate" placeholder="yyyy-mm-dd" name="date" required>
                        
                        <button type="submit">Add Event</button>
                    </form>
                </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.js"></script>
                <script>
                document.addEventListener('DOMContentLoaded', function () {
                    // Function to set the FullCalendar height dynamically
                    function setCalendarHeight() {
                        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                        var calendarHeight = windowHeight - 200;

                        $('#calendar').fullCalendar('option', 'height', calendarHeight);
                    }

                    // Initialize FullCalendar
                    var calendar = $('#calendar').fullCalendar({
                        // FullCalendar options go here
                        header: {
                            left: 'prev,next',
                            center: 'title',
                            right: '' // Remove the right-aligned buttons
                        },
                        views: {
                            month: {
                                titleFormat: 'YYYY MMMM' // Display only month and year in the title
                            }
                        },
                        defaultView: 'month', // Set the default view to month
                        editable: true,
                        eventClick: function (event) {
                            // Ask for confirmation before deleting the event
                            var confirmDelete = window.confirm('Do you want to delete this event?');
                            
                            if (confirmDelete) {
                                // Perform the deletion
                                deleteEvent(event);
                            }
                        },
                        eventDrop: function (event, delta, revertFunc) {
                            // Handle event drop (when the event is dragged and dropped)
                            var newDate = event.start.format('YYYY-MM-DD');
                            var eventId = event.title;
                
                            // Send the updated date to the server
                            $.post('/calendar/updateEventDate', { eventId: eventId, newDate: newDate }, function (data) {
                                console.log(data); // Log the server response
                                // Reload events from the server and update the calendar
                                calendar.fullCalendar('refetchEvents');
                            });
                        },
                        eventRender: function (event, element) {
                            // Set the background color of the event dynamically
                            element.css({
                                'background-color': event.backgroundColor || '#17eeee',
                                'border': 'none', // Remove the border
                                'color': 'white' // Set text color to black
                            });
                        },
                        events: ${JSON.stringify(results)}, // Load events from the server
                        height: 'auto', // Set height to auto initially
                        windowResize: setCalendarHeight // Recalculate height on window resize
                    });
                    function deleteEvent(event) {
                        var eventId = event.title;
                
                        // Send the request to delete the event from the database
                        $.ajax({
                            url: '/calendar/deleteEvent', // Replace with your server endpoint
                            type: 'POST',
                            data: { eventId: eventId },
                            success: function (data) {
                                console.log(data); // Log the server response
                                // Remove the event from the calendar
                                calendar.fullCalendar('removeEvents', eventId);
                                location.reload();

                            },
                            error: function (error) {
                                console.error(error);
                                // Handle error if necessary
                            }
                        });
                    }

                    // Handle form submission to add events
                    $('#addEventForm').submit(function (event) {
                        event.preventDefault();

                        var title = $('#eventTitle').val();
                        var date = $('#eventDate').val();

                        if (title && date) {
                            // Send the new event data to the server
                            $.post('/calendar/cal_process', { title: title, date: date }, function (data) {
                                console.log(data); // Log the server response
                                // Reload events from the server and update the calendar
                                location.reload();
                            });

                            // Clear the form
                            $('#eventTitle').val('');
                            $('#eventDate').val('');

                            $('#addEventForm').hide();
                            // Adjust calendar height after adding an event
                            setCalendarHeight();
                        }
                    });

                    // Set the initial calendar height
                    setCalendarHeight();

                    // Handle button click to show the form
                    $('#openEventFormBtn').on('click', function () {
                        var addEventForm = $('#addEventForm');
                        addEventForm.toggle();

                        // Update button content based on the form visibility
                        var buttonText = addEventForm.is(':visible') ? 'x' : '+';
                        $('#openEventFormBtn').text(buttonText);
                    });
                });
                </script>
            `, '');
            
            response.status(200).send(html);
        }
    });
});

router.post('/cal_process', function(request, response) {
    const username = request.session.nickname;
    const title = request.body.title;
    const date = request.body.date;

    if (title && date) {
        db.query('INSERT INTO caltable (username, title, date) VALUES (?, ?, ?)', [username, title, date], function(error, data) {
            if (error) {
                console.error(error);
                response.status(500).send('Internal Server Error');
            } else {
                response.status(200).send('Event added successfully');
                
            }
        });
    } else {
        response.status(400).send('Bad Request: Please fill in the title and date.');
    }
});

router.post('/updateEventDate', function (req, res) {
    const eventId = req.body.eventId;
    const newDate = req.body.newDate;

    // Update the date in the caltable
    db.query('UPDATE caltable SET date = ? WHERE title = ?', [newDate, eventId], function (error, result) {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('Event date updated successfully');
        }
    });
});

router.post('/deleteEvent', function (req, res) {
    const eventId = req.body.eventId;

    // Perform the deletion operation in the database (replace with your database query)
    db.query('DELETE FROM caltable WHERE title = ?', [eventId], function (error, result) {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('Event deleted successfully');
        }
    });
});

module.exports = router;