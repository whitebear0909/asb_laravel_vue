<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function show($id)
    {
        return User::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $req_user = [
            'first_name' => $request->first_name,
            'second_name' => $request->second_name,
            'email' => $request->email,
            'telephone' => $request->telephone,
            'qualification' => $request->qualification,
            'emp_type' => $request->emp_type,
            'avatar' => '',
            'weekly_work_hour' => $request->weekly_work_hour,
        ];

        User::where('id', $id)->update($req_user);
        $user = User::findOrFail($id);
        
        return response()
            ->json(
                [
                    'success' => true,
                    'data' => $user
                ]
            );
    }

    public function store(Request $request)
    {
        
        $user = User::create($request->all());
        return $user;
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return '';
    }
}