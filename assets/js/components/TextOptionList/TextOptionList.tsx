import { TextOptionListItem } from 'assets/js/components/TextOptionList/TextOptionListItem'
import { useState } from '@wordpress/element'
import { Button } from '@wordpress/components'

interface Props {
  options?: string[]
  updateOptions: (options: string[]) => void
  onSelect: (option: string) => void
  onRefresh: () => void
  title: string
  isLoading: boolean
  hasError: boolean
}
export function TextOptionList({
  options,
  updateOptions,
  onSelect,
  onRefresh,
  title,
  isLoading,
  hasError,
}: Props) {
  const [edit, setEdit] = useState(false)
  const [edits, setEdits] = useState(options || [])
  const displayedOptions = edit ? edits : options
  return (
    <div>
      <h3 className="ntw-mb-2 ntw-mt-0 ntw-text-lg ntw-font-bold">{title}</h3>
      {isLoading ? (
        'Loading...'
      ) : (
        <div>
          {hasError ? (
            <div>
              There was an error.{' '}
              <Button variant="link" onClick={onRefresh}>
                Retry
              </Button>
            </div>
          ) : (
            <div>
              <div className="ntw-mb-4">
                {edit ? (
                  <div className="ntw-space-x-2">
                    <Button
                      variant="secondary"
                      isDestructive
                      onClick={() => setEdit(false)}
                    >
                      Cancel changes
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        updateOptions(edits)
                        setEdit(false)
                      }}
                    >
                      Update
                    </Button>
                  </div>
                ) : (
                  <div className="ntw-space-x-2">
                    <Button
                      variant="tertiary"
                      onClick={() => {
                        setEdits(options || [])
                        setEdit(true)
                      }}
                    >
                      Edit suggestions
                    </Button>
                    <Button variant="tertiary" onClick={onRefresh}>
                      Refresh suggestions
                    </Button>
                  </div>
                )}
              </div>
              <div className="ntw-divide-x-0 ntw-divide-y ntw-divide-solid ntw-divide-gray-200 ntw-bg-white ntw-shadow-sm ntw-ring-1 ntw-ring-gray-300">
                {displayedOptions?.map((option, idx) => (
                  <div
                    key={`${idx}-${options?.[idx]}`}
                    className="ntw-px-6 ntw-py-5"
                  >
                    <TextOptionListItem
                      value={option}
                      onChange={(nextEdit) => {
                        const nextEdits = [...edits]
                        nextEdits[idx] = nextEdit
                        setEdits(nextEdits)
                      }}
                      onSelect={() => onSelect(option)}
                      edit={edit}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
