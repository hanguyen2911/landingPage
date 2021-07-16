<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'name',
        'info',
        'link',
        'amount',
        'donation_code',


        'created_at',
        'updated_at'

    ];



    protected $timestamp = false;
}
