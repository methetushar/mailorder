<template>
    <div class="">
        <div class="section-box breif-topbox">
            <div class="breif-main-box cf">
                <div class="breif-part">
                    <div class="brief-box">
                        <div class="brief-title">Job brief</div>
                        <div class="brief-desc">
                            <textarea name="description" v-model="$parent.data.jobBrief.description"
                                      placeholder="Detailed comments will help us provide you a better experience. Kindly share detailed information on the way you want this HTML to be used or any specific HTML coding standards we should incorporate or follow.">
                            </textarea>
                        </div>
                    </div>
                </div>
                <div class="fileupload-part">
                    <div class="fileupload-title">Project Files</div>
                    <div class="file-noupload">
                        <div class="cf" id="chk_noupload">
                            <input type="checkbox" v-model="$parent.data.jobBrief.noupload" autocomplete="off"    name="noupload" id="noupload">
                            <label for="noupload">I don't want to submit any file for this job.</label>
                        </div>
                    </div>
                    <div class="file-seprator">OR</div>
                    <div class="file-linking" >
                        <div class="input-box">
                            <input type="url" :disabled="$parent.data.jobBrief.noupload" name="fileurl" v-model="$parent.data.jobBrief.fileLink"
                                   placeholder="Provide file url for e.g. Dropbox, WeTransfer">
                            <div class="error-box url"></div>
                        </div>
                    </div>
                    <!-- img upload code -->
                    <div class="file-seprator">OR</div>
                    <div class="file-uploading" id="uploading1">
                        <div class="ajax-upload-dragdrop" style="vertical-align:top;">
                            <div class="upload" style="position: relative; overflow: hidden; cursor: default;">
                                <Upload
                                        multiple
                                        type="drag"
                                        action="//jsonplaceholder.typicode.com/posts/">
                                    <div style="padding: 20px 0">
                                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                        <p>Click or drag files here to upload</p>
                                    </div>
                                </Upload>
<!--                                <input type="file" name="image" :disabled="$parent.data.jobBrief.noupload"-->
<!--                                       v-on:change="onFileChange($event,'image')" multiple accept="image/*">-->
                            </div>
                        </div>
                        <div></div>
                        <div id="upload-list"></div>
                        <div class="section-tip upload-form" data-src="lightbox-panel6">
                            <p>Layered PSD / AI / EPS / PDF / SKETCH / or zip files.</p>
                            <p>Maximum file size should be 50.00 MB.</p>
                            <a href="" class="popup-tooltip tooltip-trigger i-pop-bg upload-right"></a>
                        </div>
                    </div>
                </div>
            </div>

            <br><br>
            <div class="inner_page btm_space">
                <div class="section_02">
                    <div class="main_block_2">
                        <p>To know more about <strong>bulk pricing, agency discount</strong> or to <strong>get a custom quote</strong> – <a href="javascript:void(0);" onclick="olark('api.box.expand')">
                            <em>Talk to us</em> &gt;&gt;</a></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "BriefBox",
        data(){
            return{
                imagePreview:''
            }
        },

        methods:{

        }
    }
</script>

<style scoped>

</style>
