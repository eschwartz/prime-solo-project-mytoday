--myToday Master ToDo List--

Pre-dev checklist
    [] Custom Logo
    [] React Calendar Build
    [] Moment.js Build
    [] Tailwind CSS tutorial

--Client Side--


    HEADER (Component)
        [] myToday Logo
        [] Avatar [if profile is built]

    FOOTER (Component)
        [] Buttons
            [] Highlights - Routes to Highlights Page
            [] Today - Routes to Home Screen
            [] Archives - Links to Archives
            [] ADD Event (possibly)??
        [] Styled

    HOME SCREEN (Component)

        [] Date Display (Text - "Today Is", Function - Renders today's date in written format (Moment JS?))

        [] Event List (map through events associated with today's date)
            [] Sorted by Timestamp (ASC)
            [] Needs to be in scroll-able format to allow Add Event Button to render at a minimum size

            Event Component
                [] Event Title
                [] Timestamp
                [] Click for details button (links to Event Details via event.id)
        [] ADD EVENT Button (possibly on FOOTER component??)
            [] Sized According 

    NEW EVENT (Component)

        [] NEW EVENT Sub-Header (if styling permits)

        [] Timestamp (ex. 8:54a Tues, Jan 14th, 2021) 
            <form> 
            Fields
                [] Title Input (NOT NULL)
                    [] Sends Text Value
                [] Event Description (can be null)
                    [] Sends Text Value
                [] Select Image for Upload (can be null)
                    [] Sends Image URL
                [] Make Highlight (checkbox star or heart icon?? - Refer to Feedback project)
                    [] Boolean 
            Buttons
                [] Submit - Sends to db
                    [] title
                    [] description
                    [] imageUrl
                    [] user_id (gather form Login)
                    [] timestamp
                    [] highlight
                [] Cancel - Clears Fields and returns to HOME SCREEN
            </form>

    ARCHIVE (Component)
        ARCHIVE Sub-Header
            [] Suprise Me! Button
                [] Pulls a Random Event from the DB as a result
        
        Calendar
            [] Calendar Component
            [] Is Collapse-able?
            [] Clicking Dates will render associated results

        Results
            [] Sorted by Timestamp (ASC)
            [] Timestamp will act as title
            [] "Click to View" button pulls up EVENT component   

    EVENT (Component)
        DATE BAR
            [] Displayes Date of the Entry
            [] Left and Right scrolls between dates
        BODY
            [] Timestamp of Entry
            [] Title
            [] Description
            [] L and R buttons (scroll between entries on associated date)
            [] Make Highlight (checkbox star or heart icon?? - Refer to Feedback project)

            BUTTONS
                [] DELETE - Removes entry from DB
                    [] Alters (Event deleted!)
                    [] Scrolls forward to next entry
                [] EDIT - Can Edit following (MAY NEED NEW COMPONENT ENTIRELY FOR THIS)
                    [] Title
                    [] Description
                    [] Image    
    

    HIGHLIGHTS
        Title Sub-header (HIGHLIGHTS On This Day)

        Highlight Buttons
            [] Last Week (Seven days from today's date)
            [] Last Month (Day of the prior month)
            [] Last Year (today dd/mm/(previous year))

        Events (will display HIGHLIGHTED events from dates)
            [] Only Render if Highlight === T
            [] Render the BODY component from EVENT component
            [] L an R to swipe between events on Highlight Date (Carousel)

    

    

    

    


    


               
        


    

    

