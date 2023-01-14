import React from "react";
import { destroyPostAsync } from "../slices/postSlice";

const EditDeleteButtons = (props: any) => {
  const deleteHandler = (e: React.SyntheticEvent) => {
    const payload = {
      post: {
        post_id: props.post_id,
      },
    };
    props.dispatch(destroyPostAsync(payload));
  };

  return (
    <div className="">
      <button
        className="bg-purple-300 text-black rounded-md shadow hover:ring-2 focus:ring-4 mx-3 px-2"
        onClick={() => props.toggleEditForm()}
      >
        Edit
      </button>
      <button
        className="bg-purple-500 text-white rounded-md shadow hover:ring-2 focus:ring-4 px-2"
        onClick={(e) => deleteHandler(e)}
      >
        Delete
      </button>
    </div>
  );
};

export default EditDeleteButtons;
