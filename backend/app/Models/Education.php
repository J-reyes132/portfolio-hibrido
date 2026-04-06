<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $fillable = ['number', 'title', 'subtitle', 'description', 'period', 'order'];
}
