<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PersonalItem extends Model
{
    protected $fillable = ['image_url', 'label', 'order'];
}
