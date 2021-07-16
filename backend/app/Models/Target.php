<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Target extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'title',
        'name',
        'info',
        'des',
        'image',
        'created_at',
        'updated_at'

    ];



    protected $timestamp = false;
}
