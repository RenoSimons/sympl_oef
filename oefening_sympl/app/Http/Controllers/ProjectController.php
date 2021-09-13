<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Project;
use App\Models\User;

class ProjectController extends Controller
{
    public function getAllProjects() {
        // Get all the existing projects
        $projects = Project::all();
        return response()->json($projects);
    }

    public function linkProject(Request $request) {
        // Validate the request
        $validator =  Validator::make($request->all(),[
            'email' => 'required|email',
            'dropdown' => 'required',
        ]);

        // If the validation fails
        if ($validator->fails()) {

            return response()->json([
                'validation_error' => $validator->messages(),
            ]);

        } else {
            // If the validation passes

            // Get the given e-mail's user object
            $user = User::where('email', $request->email)->first();

            if(!$user) {
                $message = "User does not exist, enter a valid email";

                return response()->json($message);
            }

            // Get the given project's ID
            $project_id =  $request->dropdown;

            // Check if the user is already linked to the given project
            if ($user->projects->contains($project_id)) {

                $message = $request->email . " is already linked to project " . $project_id;

                return response()->json($message);

            } else {
                // Attach the project to the user
                $user->projects()->attach($project_id);

                $message = $request->email . " added to project " . $project_id;

                return response()->json($message);
            }
        }  
    }
}
