<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LibraryController;
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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'library', 
    'as' => 'library', 
    'middleware' => 'auth:sanctum']
    , function () {
    Route::post('/', [LibraryController::class, 'store']);
    Route::delete('/{id}', [LibraryController::class, 'delete']);
    // route to get list of watchlist, favorite and watched
    Route::get('/{section}/{user_id}', [LibraryController::class, 'getSectionList']);
});