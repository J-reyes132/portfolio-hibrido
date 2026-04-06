<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['title', 'description', 'image_url', 'technologies', 'links', 'order'];

    protected $casts = [
        'technologies' => 'array',
        'links' => 'array',
    ];
}
