<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'name',
        'image',
        'infor',
        'link',
        'top',
        'created_at',
        'updated_at'

    ];



    protected $timestamp = false;
}
