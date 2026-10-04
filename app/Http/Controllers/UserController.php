<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function storeAdmin(StoreUserRequest $request)
    {
        User::create([
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'address' => $request->input('address'),
            'phone_number' => $request->input('phone_number'),
            'email' => $request->input('email'),
            'branch_id' => $request->input('branch_id'),
            'role_id' => 2, // Sesuaikan role untuk admin
            'password' => Hash::make('12345'), // Password di-set otomatis di backend
        ]);

        return redirect()->back()->with('success', 'Admin berhasil ditambahkan.');
    }
}
