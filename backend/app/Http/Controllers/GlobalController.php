<?php

namespace App\Http\Controllers;

use App\Http\Resources\GlobalResource;

class GlobalController extends Controller
{
    public function index()
    {
        return new GlobalResource(null);
    }
}
