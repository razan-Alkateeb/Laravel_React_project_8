<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class PostController extends Controller
{

    public function getAllPosts()
    {
        $posts = Post::with('user')->get();
        return response()->json($posts);
    }


    public function getUserPosts($id)
    {
        $userPosts = Post::where('user_id', $id)->with('comment')->with('user')->get();
        return response()->json($userPosts);
    }


    public function index()
    {
        $posts = Post::all();

        // Pass the users data to the view
        return view('dashboard.post' ,  compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the max file size and allowed extensions as needed
            ]
        );
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('img');
            $image->move($destinationPath, $filename);
        }
        $post = POST::create([
            'title' => $request->title,
            'image' => $filename,
            'user_id' => $request->id,
            'text' => $request->text
        ]);

        return response()->json();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::with(['user', 'comment.user'])->find($id);
        return response()->JSON($post);
    }
    public function comment(Request $request)
    {
        $request->validate([
            'text' => 'required|string|max:255',
        ]);
        Comment::create([
            'user_id' => $request->userId, // Replace 'field1' with your actual field name and 'value1' with the value you want to insert.
            'post_id' => $request->postId,
            'text' => $request->text,

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request ,$id)
    {
        $post = Post::where('id', $id)->where('post_id', $request->id)->first();

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('img');
            $image->move($destinationPath, $filename);
        }
        $post->title = $request->title;
        $post->text = $request->text;
        $post->image = $filename;

        $post->update();

        return response()->json();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\HttpRequest  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    // public function destroy( $id)
    public function delete(Post $post ,$id)
    {

        $post = Post::where('id', $id)->delete();

        return response()->json();
    }
    public function destroy(Post $post ,$id)
    {
        Post::find($id)->delete();
        Post::destroy($id);
        return redirect('postdash')->with('flash_message', 'Post deleted successfully');

    }
}
