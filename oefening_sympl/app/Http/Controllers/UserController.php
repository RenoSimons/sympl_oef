<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUsers() {
        $users = User::with('projects')->get();
        
        return response()->json($users);
    }

    public function getAllEmails() {
        $emails = DB::table('users')->pluck('email')->all();
        
        return response()->json($emails);
    }
}
