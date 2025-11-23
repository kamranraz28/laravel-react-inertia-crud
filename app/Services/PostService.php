<?php

namespace App\Services;

use App\Repositories\PostRepository;
use App\Models\Post;

class PostService
{
    protected $posts;

    public function __construct(PostRepository $posts)
    {
        $this->posts = $posts;
    }

    public function listPosts()
    {
        return $this->posts->getAllPaginated();
    }

    public function createPost(array $data)
    {
        return $this->posts->create($data);
    }

    public function updatePost(Post $post, array $data)
    {
        return $this->posts->update($post, $data);
    }

    public function deletePost(Post $post)
    {
        return $this->posts->delete($post);
    }
}
