<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function getAllProjects (Request $request) {
        $projects = Project::all();
        return response()->json($projects);
    }
}
