import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import PostShow from "@/components/posts/post-show";
import { Suspense } from "react";
import paths from "@/paths";
import Link from "next/link";
import PostShowLoading from "@/components/posts/post-show-loading";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;
  
  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {'< '}Back to {slug}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} />
      <CommentList postId={postId} />
    </div>
  );
}
