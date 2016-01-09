Angular-inline-editing
================

Backend: user.php file is created which returns JSON object.

Frontend: index.html file which having all functionality you can run it using `http://localhost/Angular-inline-editing/` url.


Setup into local
-------

Just clone this repository to localhost's www directory where every PHP project recides. Then you can run this using `http://localhost/Angular-inline-editing/`

Funcationality supports
-------

 1. Server (Fetches data from server)
 2. Local (Fetches data from local)
 2. Editing row ()
 2. Deleting row
 3. Adding new row
 4. Reordering row

Each functionality **Update everytime in localstorage** everytime except **Server (Fetching from server)**. Fetching from server always checks if there is no data in **Localstorage** then update in localstorage. 




