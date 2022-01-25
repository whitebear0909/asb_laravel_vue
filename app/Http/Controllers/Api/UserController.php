<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Support\Facades\Storage;
class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::where('first_name','like','%'.$request->sch_str.'%')
                    ->orWhere('second_name','like','%'.$request->sch_str.'%')
                    ->orWhere('email','like','%'.$request->sch_str.'%')
                    ->get();
        return $users;
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
            'weekly_work_hour' => $request->weekly_work_hour,
            'avatar' => $request->avatar
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
        $validator = Validator::make($request->all(),[
            'first_name' => 'required|string|max:255',
            'second_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());       
        }

        $req_user = $request->all();
        $req_user["password"] = Hash::make('123456'); //default password
        $user = User::create($req_user);
        return response()
            ->json(
                [
                    'success' => true,
                    'data' => $user
                ]
            );
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return '';
    }
}