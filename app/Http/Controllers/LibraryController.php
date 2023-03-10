<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Library;

class LibraryController extends Controller
{
    public function store(Request $request) {
        $newLibrary = new Library();
        $newLibrary->user_id = $request['user_id'];
        $newLibrary->media_id = $request['media_id'];
        $newLibrary->media_type = $request['media_type'];
        $newLibrary->section = $request['section'];
        $newLibrary->save();
        return response()->json(['message' => 'Added Successfully']);
    }
    public function delete($id) {
        $library = Library::find($id);
        $library->delete();
        return 'deleted successfully';
    }
    public function getSectionList($section, $user_id) {
        $list = Library::where('user_id', $user_id)
                ->where('section', $section)
                ->get();
        return $list;
    }
}
