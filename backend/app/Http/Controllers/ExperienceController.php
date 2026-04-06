<?php

namespace App\Http\Controllers;

use App\Http\Resources\ExperienceResource;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function index(){
        return new ExperienceResource(null);
    }
}
