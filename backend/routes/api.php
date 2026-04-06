<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GlobalController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\SkillsController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ArchitectureController;
use App\Http\Controllers\ContactController;

// Global data (navbar + footer)
Route::get('/global', [GlobalController::class, 'index']);

// Page data
Route::get('/home', [HomeController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/skills', [SkillsController::class, 'index']);
Route::get('/experience', [ExperienceController::class, 'index']);
Route::get('/architecture', [ArchitectureController::class, 'index']);
Route::get('/contact', [ContactController::class, 'index']);

// Contact form submission
Route::post('/contact/submit', [ContactController::class, 'submit']);
