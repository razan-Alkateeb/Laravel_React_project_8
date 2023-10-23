<?php

namespace Database\Seeders;

use App\Models\Comment;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Comment::create([
            'text' => 'This is the first comment.',
            'user_id' => 1,
            'post_id' => 1,
        ]);
        Comment::create([
            'text' => 'Another comment on the same post.',
            'user_id' => 2,
            'post_id' => 1,
        ]);
        Comment::create([
            'text' => 'Comment on a different post.',
            'user_id' => 1,
            'post_id' => 2,
        ]);
    }
}
