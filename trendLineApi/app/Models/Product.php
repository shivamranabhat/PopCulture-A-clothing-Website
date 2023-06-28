<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable=[
        'name','brand','size','wear_type','category_id','image','description','slug'
    ];
    //Defining relations
    public function category(){
        $this->belongsTo(Category::class);
    }
}
