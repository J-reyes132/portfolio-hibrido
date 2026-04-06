<?php

namespace App\Http\Controllers;

use App\Http\Resources\SkillsResource;

class SkillsController extends Controller
{
    public function index()
    {
        return new SkillsResource(null);
    }
}
