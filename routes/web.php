<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Default route for Vue.js
Route::get('/{vue_capture?}', static function () {
    return view('index');
})->where('vue_capture', '[\/\w\.-]*')->name('vue');
