<?php

namespace App\Http\Controllers;

use App\Http\Resources\AboutResource;

class AboutController extends Controller
{
    public function index()
    {
        return new AboutResource(null);
    }
}
