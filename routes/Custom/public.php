<?php

/**
* All the routes for our public website
*/



// Home Page
Route::get('/',function() {
    return view('public.home');
});
