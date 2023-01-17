import React, { useEffect, useState } from "react";
import EditDeleteButtons from "./EditDeleteButtons";

const Post = (props: any) => {
  const [title, setTitle] = useState(props.post.title);
  const [body, setBody] = useState(props.post.body);
  const [isEditing, setIsEditing] = useState(
    props.postToEdit === props.post.id
  );

  useEffect(() => {
    setIsEditing(props.postToEdit === props.post.id);
  }, [props.postToEdit, props.post.id]);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = {
      post: {
        id: props.post.id,
        title: title,
        body: body,
      },
    };
    props.submitEdit(formData);
    setTitle(props.post.title);
    setBody(props.post.body);
  };

  const titleElement = (
    <h2 className="text-start line-clamp-1">{props.post.title}</h2>
  );
  const bodyElement = (
    <p className="text-start line-clamp-1">{props.post.body}</p>
  );

  const editableTitle = (
    <input
      type="text"
      className="block w-full h-10 p-2 focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );

  const editableBody = (
    <textarea
      className="block w-full h-24 p-2 mt-2 focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
      value={body}
      onChange={(e) => setBody(e.target.value)}
    />
  );

  const submitButton = (
    <button
      type="submit"
      className="bg-purple-300 text-black rounded-md shadow hover:ring-2 focus:ring-4 m-3 px-2"
      onClick={(e) => submitHandler(e)}
    >
      Submit
    </button>
  );

  return (
    <div className="py-2">
      <div className="flex flex-row ">
        {isEditing ? (
          <div className="basis-full  text-md font-nunito">{editableTitle}</div>
        ) : (
          <div className="my-1 basis-3/5 font-semibold text-md font-nunito">
            {titleElement}
          </div>
        )}

        {isEditing ? (
          ""
        ) : (
          <div className="border-2 border-transparent  my-1 basis-2/5">
            <EditDeleteButtons
              post_id={props.post.id}
              dispatch={props.dispatch}
              toggleEditForm={props.toggleEditForm}
            />
          </div>
        )}
      </div>
      <div className="my-2">{isEditing ? editableBody : bodyElement}</div>
      <div className="">
        <div className="">{isEditing ? submitButton : ""}</div>
      </div>
    </div>
  );
};

export default Post;
