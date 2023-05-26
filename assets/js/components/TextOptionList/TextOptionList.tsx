import { TextOptionListItem } from 'assets/js/components/TextOptionList/TextOptionListItem'
import { AsyncStateManager } from 'assets/js/components/AsyncStateManager/AsyncStateManager'
import { SectionHeading } from 'assets/js/components/SectionHeading/SectionHeading'

interface Props {
  options?: string[]
  updateOptions: (options: string[]) => void
  onSelect: (option: string) => void
  onRefresh: () => void
  title: string
  subtitle: string
  isLoading: boolean
  hasError: boolean
  disabled?: boolean
  disabledMessage?: string
}
export function TextOptionList({
  options,
  updateOptions,
  onSelect,
  onRefresh,
  title,
  subtitle,
  isLoading,
  hasError,
  disabled,
  disabledMessage,
}: Props) {
  return (
    <div>
      <SectionHeading
        title={title}
        subtitle={subtitle}
        className="ntw-mb-24px"
        onRefresh={onRefresh}
      />

      {disabled ? (
        <div>{disabledMessage || 'Currently unavailable.'}</div>
      ) : (
        <AsyncStateManager
          isLoading={isLoading}
          hasError={hasError}
          retry={onRefresh}
        >
          <div className="ntw-space-y-16px">
            {options?.map((option, idx) => (
              <div key={idx}>
                <TextOptionListItem
                  value={option}
                  onChange={(nextEdit) => {
                    if (!options) return
                    const nextEdits = [...options]
                    nextEdits[idx] = nextEdit
                    updateOptions(nextEdits)
                  }}
                  onSelect={() => onSelect(option)}
                />
              </div>
            ))}
          </div>
        </AsyncStateManager>
      )}
    </div>
  )
}
