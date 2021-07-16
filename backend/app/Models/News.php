<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'title',
        'content',
        'image',

        'created_at',
        'updated_at'

    ];



    protected $timestamp = false;
}
