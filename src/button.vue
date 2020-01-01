<template>
    <div>
        <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
            <svg v-if="icon" class="icon">
                <use :xlink:href="`#icon-${icon}`"></use>
            </svg>
            <div class="g-button-content">
                <slot></slot>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'GuluButton',
    props: {
        icon: {},
        iconPosition: {
            type: String,
            default: 'left',
            validator (value) {
                return value === 'left' || value === 'right'
            }
        }
    }
}
</script>

<style lang="scss">
.g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--button-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &:hover {
        border-color: var(--border-color-hover);
    }
    &:active {
        background-color: var(--button-active-bg);
    }
    &:focus {
        outline: none;
    }
    > .g-button-content {
        order: 2;
    }
    > .icon {
        width: 1em;
        height: 1em;
        vertical-align: middle;
        order: 1;
        margin-right: .1em;
    }
    &.icon-right {
      > .g-button-content {
          order: 1; 
        }
      > .icon {
          order: 2;
          margin-right: 0;
          margin-left: .1em;
        }
    } 
}

</style>