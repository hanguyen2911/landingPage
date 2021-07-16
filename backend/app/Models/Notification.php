<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'message',
        'status',
        'link',

        'created_at',
        'updated_at'

    ];



    protected $timestamp = false;
}
