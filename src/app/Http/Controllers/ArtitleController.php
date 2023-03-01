<?php

namespace App\Http\Controllers;

use App\Models\Artitle;
use Illuminate\Http\Request;

class ArtitleController extends Controller
{
    public function index(){
        return view('artitles.index', ['artitles' => Artitle::all()]);
    }
}
