<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

// Get the users with their projects
Route::get('/getUsers', [UserController::class, 'getUsers'])->name('getUsers');

// Get only the users emails
Route::get('/getAllEmails', [UserController::class, 'getAllEmails'])->name('getAllEmails');

// Link a member to a project
Route::post('/linkProject', [ProjectController::class, 'linkProject'])->name('linkProject');

// Get the members with their projects
Route::get('/getProjects', [ProjectController::class, 'getAllProjects'])->name('getProjects');

