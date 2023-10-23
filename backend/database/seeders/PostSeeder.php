<?php

namespace Database\Seeders;
use App\Models\Post;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::create([
            'user_id' => 1,
            'title' => 'This is the first post.',
            'text' => 'This is the first post.',
        ]);
        Post::create([
            'user_id' => 2,
            'title' => 'Another po  st with text and media.',
            'text' => 'Another post with text and media.',
        ]);
    }
}
