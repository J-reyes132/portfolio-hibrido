<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArchitectureResource;

class ArchitectureController extends Controller
{
    public function index()
    {
        return new ArchitectureResource(null);
    }
}
