<?php

use App\Http\Controllers\BranchController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Route::inertia('/', 'welcome')->name('home');

Route::redirect('/', '/dashboard')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::resource('branches', BranchController::class);
    Route::post('admin', [UserController::class, 'storeAdmin'])->name('admin.store');
});

require __DIR__ . '/settings.php';
