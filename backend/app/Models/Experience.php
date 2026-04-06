<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $fillable = ['title', 'company', 'period', 'logo_url', 'description', 'achievements', 'technologies', 'order'];

    protected $casts = [
        'achievements' => 'array',
        'technologies' => 'array',
    ];
}
