import { useDispatch, useSelect } from '@wordpress/data'
import { useRevision } from 'assets/js/application/useRevision'

const useWpSelect = useSelect as WordPress.useSelect

export const useEditPostTitle = () => {
  const { editPost } = useDispatch('core/editor')
  const { postTitle } = useWpSelect((select) => {
    const coreEditor = select('core/editor')
    return {
      postTitle: coreEditor.getEditedPostAttribute<string>('title'),
    }
  })
  const titleHistory = useRevision({
    trackValue: postTitle,
    revertFn: (initialTitle) => {
      editPost({ title: initialTitle })
    },
  })

  return {
    editPostTitle: (title: string) => {
      titleHistory.update(title)
      editPost({
        title,
      })
    },
    postTitle,
    revertTitle: titleHistory.revert,
  }
}
