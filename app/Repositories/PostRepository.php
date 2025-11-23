<?php

namespace App\Repositories;

use App\Models\Post;

class PostRepository
{
    public function getAllPaginated($perPage = 10)
    {
        return Post::orderBy('created_at', 'desc')->paginate($perPage);
    }

    public function create(array $data)
    {
        return Post::create($data);
    }

    public function update(Post $post, array $data)
    {
        return $post->update($data);
    }

    public function delete(Post $post)
    {
        return $post->delete();
    }
}
