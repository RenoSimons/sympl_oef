<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;

class ProjectController extends Controller
{
    public function getAllProjects() {
        $projects = Project::all();
        return response()->json($projects);
    }

    public function linkProject(Request $request) {
        // Get the given e-mail's user object
        $user = User::where('email', $request->userInput)->first();

        // Get the given project's ID
        $project_id =  $request->dropdownInput;

        // Attach the project to a user
        $user->projects()->attach($project_id);

        $message = "Role succesfullly added";

        return response()->json($message);
    }
}
