<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Authentication Controllers */
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/current', [AuthController::class, 'current'])->middleware('auth:sanctum');
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


/* using middleware */
Route::group(['middleware' => ['auth:sanctum']], function () {
  Route::get('/users', [UserController::class, 'index']); //get all user
  Route::get('/users/{id}', [UserController::class, 'show']); //get user by id
  Route::post('/users/{id}', [UserController::class, 'update']); //update user by id
  Route::post('/users', [UserController::class, 'store']); //create user
  Route::delete('/users/{id}', [UserController::class, 'destroy']); //delete user by id

});
