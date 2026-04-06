<?php

namespace App\Http\Controllers;

use App\Http\Resources\HomeResource;

class HomeController extends Controller
{
    public function index()
    {
        return new HomeResource(null);
    }
}
