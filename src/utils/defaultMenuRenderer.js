import classNames from 'classnames';
import React from 'react';

function menuRenderer ({
	focusedOption,
	instancePrefix,
	labelKey,
	onFocus,
	onSelect,
	optionClassName,
	optionComponent,
	optionRenderer,
	options,
	valueArray,
	valueKey,
	onOptionRef
}) {
	let Option = optionComponent;

	return options.map((option, i) => {
		let isSelected = valueArray && valueArray.indexOf(option) > -1;
		let isFocused = option === focusedOption;
		let optionClass = classNames(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled,
		});

		return (
			<Option
				className={optionClass+' select-item-border1'}
				style={{borderColor: option.color}}
				instancePrefix={instancePrefix}
				isDisabled={option.disabled}
				isFocused={isFocused}
				isSelected={isSelected}
				key={`option-${i}-${option[valueKey]}`}
				onFocus={onFocus}
				onSelect={onSelect}
				option={option}
				optionIndex={i}
				ref={ref => { onOptionRef(ref, isFocused); }}
			>
				{optionRenderer(option, i)}
				<div className="category-color" style={backgroundColor: option.color}></div>
			</Option>
		);
	});
}

module.exports = menuRenderer;
