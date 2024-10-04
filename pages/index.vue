<template>
    <div class="card flex justify-center">
        <Stepper value="1" class="basis-[50rem]">
            <StepList>
                <Step value="1">Header I</Step>
                <Step value="2">Header II</Step>
                <Step value="3">Header III</Step>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore impedit totam ipsam aliquid nobis cum, vel cupiditate sint fugiat, animi magnam in unde aspernatur non libero, ipsa quia nam.
                            </div>
                        </div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="pt-6">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div> 

    <div class="my-5 mx-auto max-w-3xl">
        <div class="card flex flex-col gap-6">
        <div>
            <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
            <InputText id="non-fluid" />
        </div>

        <div>
            <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
            <InputText id="non-fluid" fluid />
        </div>

        <Fluid>
            <span class="font-bold mb-2 block">Fluid Container</span>
            <div class="grid grid-cols-2 gap-4">
                <div><InputText /></div>
                <div><InputText /></div>
                <div class="col-span-full"><InputText /></div>
                <div><InputText :fluid="false" placeholder="Non-Fluid" /></div>
            </div>
        </Fluid>
        </div>
    </div>

    <Fieldset>
        <template #legend>
            <div class="flex items-center pl-2">
                <Avatar image="https://github.com/yuxxeun.png" shape="circle" />
                <span class="font-bold p-2">Amy Elsner</span>
            </div>
        </template>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Fieldset>

</template>

