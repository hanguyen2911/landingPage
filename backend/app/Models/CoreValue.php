<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoreValue extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'name',
        'content',
        'image',

        'created_at',
        'updated_at'

    ];



    protected $timestamp = false;
}
