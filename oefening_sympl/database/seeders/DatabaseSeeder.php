<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Make 5 users
        for ($i=1; $i < 5; $i++) {
            DB::table('users')->insert([
                'name' => "User" . $i,
                'email' => 'user@user' . $i .'com',
            ]);
        }
        
        // Make 5 projects
        for ($i=1; $i < 5; $i++) {
            DB::table('projects')->insert([
                'project_name' => "Project" . $i,
            ]);
        }

        // Make 5 roles
        for ($i=1; $i < 5; $i++) {
            DB::table('roles')->insert([
                'role_name' => "Role" . $i,
            ]);
        }
    }
}
